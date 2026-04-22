'use client';

import { useEffect, useMemo, useState } from 'react';
import styles from './page.module.css';
import type { ContactMessage as LocalContactMessage, DownloadLead as LocalDownloadLead } from '@/lib/adminLogStore';

type LeadRow = LocalDownloadLead;
type MessageRow = LocalContactMessage;

const productOptions = [
  { value: '', label: 'All products' },
  { value: 'asl40', label: 'ASL-40' },
  { value: 'csal', label: 'C-SAL' },
  { value: 's-battery', label: 'S-BATTERY' },
];

export default function DownloadLeadsAdminPage()
{
  const [activeTab, setActiveTab] = useState<'leads' | 'messages'>('leads');
  const [rows, setRows] = useState<LeadRow[]>([]);
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [lastRecordAt, setLastRecordAt] = useState<string | null>(null);
  const [lastMessageAt, setLastMessageAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [product, setProduct] = useState('');
  const [messageStatus, setMessageStatus] = useState<'all' | 'new' | 'done'>('all');
  const [editingLeadId, setEditingLeadId] = useState<string | null>(null);
  const [editLead, setEditLead] = useState({
    email: '',
    productKey: '',
    productName: '',
    language: 'tr' as 'tr' | 'en',
    sourcePath: '',
  });

  const queryString = useMemo(() =>
  {
    const params = new URLSearchParams();
    if (fromDate) params.set('from', fromDate);
    if (toDate) params.set('to', toDate);
    if (product) params.set('product', product);
    return params.toString();
  }, [fromDate, toDate, product]);

  const fetchRows = async () =>
  {
    setLoading(true);
    setError('');
    try
    {
      const leadsResponse = await fetch(`/api/admin-logs/leads?${queryString}`);
      const messageParams = new URLSearchParams(queryString);
      messageParams.set('status', messageStatus);
      const messagesResponse = await fetch(`/api/admin-logs/messages?${messageParams.toString()}`);
      if (!leadsResponse.ok || !messagesResponse.ok)
      {
        throw new Error('Failed to fetch admin logs.');
      }

      const leadsData = await leadsResponse.json();
      const messagesData = await messagesResponse.json();
      const nextLeads: LeadRow[] = Array.isArray(leadsData?.rows) ? leadsData.rows : [];
      const nextMessages: MessageRow[] = Array.isArray(messagesData?.rows) ? messagesData.rows : [];

      setLastRecordAt(nextLeads.length > 0 ? nextLeads[0].createdAt : null);
      setLastMessageAt(nextMessages.length > 0 ? nextMessages[0].createdAt : null);
      setRows(nextLeads);
      setMessages(nextMessages);
    } catch (err)
    {
      setError(err instanceof Error ? err.message : 'Failed to read local rows.');
      setRows([]);
      setMessages([]);
      setLastRecordAt(null);
      setLastMessageAt(null);
    } finally
    {
      setLoading(false);
    }
  };

  const exportCsv = async () =>
  {
    setError('');
    try
    {
      const csvRows = activeTab === 'leads'
        ? [
          ['createdAt', 'email', 'productKey', 'productName', 'language', 'sourcePath'].join(','),
          ...rows.map((row) => [
            `"${row.createdAt.replace(/"/g, '""')}"`,
            `"${row.email.replace(/"/g, '""')}"`,
            `"${row.productKey.replace(/"/g, '""')}"`,
            `"${row.productName.replace(/"/g, '""')}"`,
            `"${row.language.replace(/"/g, '""')}"`,
            `"${row.sourcePath.replace(/"/g, '""')}"`,
          ].join(',')),
        ]
        : [
          ['createdAt', 'name', 'email', 'status', 'message', 'sourcePath'].join(','),
          ...messages.map((row) => [
            `"${row.createdAt.replace(/"/g, '""')}"`,
            `"${row.name.replace(/"/g, '""')}"`,
            `"${row.email.replace(/"/g, '""')}"`,
            `"${row.status.replace(/"/g, '""')}"`,
            `"${row.message.replace(/"/g, '""')}"`,
            `"${row.sourcePath.replace(/"/g, '""')}"`,
          ].join(',')),
        ];
      const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = activeTab === 'leads' ? 'download-leads.csv' : 'contact-messages.csv';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err)
    {
      setError(err instanceof Error ? err.message : 'Failed to export local CSV.');
    }
  };

  const startLeadEdit = (lead: LeadRow) =>
  {
    setEditingLeadId(lead.id);
    setEditLead({
      email: lead.email,
      productKey: lead.productKey,
      productName: lead.productName,
      language: lead.language,
      sourcePath: lead.sourcePath,
    });
  };

  const saveLeadEdit = () =>
  {
    if (!editingLeadId) return;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(editLead.email.trim());
    if (!validEmail || !editLead.productName.trim() || !editLead.productKey.trim())
    {
      setError('Please provide valid lead fields before saving.');
      return;
    }

    fetch(`/api/admin-logs/leads/${editingLeadId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: editLead.email.trim().toLowerCase(),
        productKey: editLead.productKey.trim(),
        productName: editLead.productName.trim(),
        language: editLead.language,
        sourcePath: editLead.sourcePath.trim() || '/',
      }),
    })
      .then((response) =>
      {
        if (!response.ok) throw new Error('Failed to update lead.');
        setEditingLeadId(null);
        setError('');
        fetchRows();
      })
      .catch((err) =>
      {
        setError(err instanceof Error ? err.message : 'Failed to update lead.');
      });
  };

  const removeLead = (id: string) =>
  {
    fetch(`/api/admin-logs/leads/${id}`, { method: 'DELETE' })
      .then((response) =>
      {
        if (!response.ok) throw new Error('Failed to delete lead.');
        if (editingLeadId === id) setEditingLeadId(null);
        fetchRows();
      })
      .catch((err) =>
      {
        setError(err instanceof Error ? err.message : 'Failed to delete lead.');
      });
  };

  const setMessageStatusById = (id: string, status: 'new' | 'done') =>
  {
    fetch(`/api/admin-logs/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
      .then((response) =>
      {
        if (!response.ok) throw new Error('Failed to update message.');
        fetchRows();
      })
      .catch((err) =>
      {
        setError(err instanceof Error ? err.message : 'Failed to update message.');
      });
  };

  const removeMessage = (id: string) =>
  {
    fetch(`/api/admin-logs/messages/${id}`, { method: 'DELETE' })
      .then((response) =>
      {
        if (!response.ok) throw new Error('Failed to delete message.');
        fetchRows();
      })
      .catch((err) =>
      {
        setError(err instanceof Error ? err.message : 'Failed to delete message.');
      });
  };

  useEffect(() =>
  {
    fetchRows();
  }, [messageStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Admin Log Panel</h1>
        <div className={styles.tabRow}>
          <button type="button" className={`${styles.tabButton} ${activeTab === 'leads' ? styles.tabActive : ''}`} onClick={() => setActiveTab('leads')}>
            Leads
          </button>
          <button type="button" className={`${styles.tabButton} ${activeTab === 'messages' ? styles.tabActive : ''}`} onClick={() => setActiveTab('messages')}>
            Messages
          </button>
        </div>
        {activeTab === 'leads' ? (
          <p className={styles.lastRecord}>
            Last lead: <strong>{lastRecordAt ? new Date(lastRecordAt).toLocaleString('tr-TR') : 'No record yet'}</strong>
          </p>
        ) : (
          <p className={styles.lastRecord}>
            Last message: <strong>{lastMessageAt ? new Date(lastMessageAt).toLocaleString('tr-TR') : 'No record yet'}</strong>
          </p>
        )}

        <div className={styles.filters}>
          <input
            id="filter-from-date"
            name="fromDate"
            className={styles.input}
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            id="filter-to-date"
            name="toDate"
            className={styles.input}
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <select
            id="filter-product"
            name="product"
            className={styles.select}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            {productOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            id="filter-message-status"
            name="messageStatus"
            className={styles.select}
            value={messageStatus}
            onChange={(e) => setMessageStatus(e.target.value as 'all' | 'new' | 'done')}
          >
            <option value="all">All messages</option>
            <option value="new">New only</option>
            <option value="done">Done only</option>
          </select>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={fetchRows} disabled={loading}>
              {loading ? 'Loading...' : 'Apply'}
            </button>
            <button type="button" className={styles.button} onClick={exportCsv}>
              CSV Export
            </button>
          </div>
        </div>

        {error ? <p className={styles.error}>{error}</p> : null}

        {activeTab === 'leads' ? (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Email</th>
                  <th>Product Key</th>
                  <th>Product Name</th>
                  <th>Lang</th>
                  <th>Source</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={7}>No lead records found.</td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id}>
                      <td>{new Date(row.createdAt).toLocaleString('tr-TR')}</td>
                      <td>
                        {editingLeadId === row.id ? (
                          <input
                            id={`lead-email-${row.id}`}
                            name={`leadEmail-${row.id}`}
                            className={styles.inlineInput}
                            value={editLead.email}
                            onChange={(e) => setEditLead((prev) => ({ ...prev, email: e.target.value }))}
                          />
                        ) : row.email}
                      </td>
                      <td>
                        {editingLeadId === row.id ? (
                          <input
                            id={`lead-product-key-${row.id}`}
                            name={`leadProductKey-${row.id}`}
                            className={styles.inlineInput}
                            value={editLead.productKey}
                            onChange={(e) => setEditLead((prev) => ({ ...prev, productKey: e.target.value }))}
                          />
                        ) : row.productKey}
                      </td>
                      <td>
                        {editingLeadId === row.id ? (
                          <input
                            id={`lead-product-name-${row.id}`}
                            name={`leadProductName-${row.id}`}
                            className={styles.inlineInput}
                            value={editLead.productName}
                            onChange={(e) => setEditLead((prev) => ({ ...prev, productName: e.target.value }))}
                          />
                        ) : row.productName}
                      </td>
                      <td>
                        {editingLeadId === row.id ? (
                          <select
                            id={`lead-language-${row.id}`}
                            name={`leadLanguage-${row.id}`}
                            className={styles.inlineInput}
                            value={editLead.language}
                            onChange={(e) => setEditLead((prev) => ({ ...prev, language: e.target.value as 'tr' | 'en' }))}
                          >
                            <option value="tr">TR</option>
                            <option value="en">EN</option>
                          </select>
                        ) : row.language.toUpperCase()}
                      </td>
                      <td>
                        {editingLeadId === row.id ? (
                          <input
                            id={`lead-source-path-${row.id}`}
                            name={`leadSourcePath-${row.id}`}
                            className={styles.inlineInput}
                            value={editLead.sourcePath}
                            onChange={(e) => setEditLead((prev) => ({ ...prev, sourcePath: e.target.value }))}
                          />
                        ) : row.sourcePath}
                      </td>
                      <td>
                        <div className={styles.rowActions}>
                          {editingLeadId === row.id ? (
                            <>
                              <button type="button" className={styles.smallButton} onClick={saveLeadEdit}>Save</button>
                              <button type="button" className={styles.smallButtonGhost} onClick={() => setEditingLeadId(null)}>Cancel</button>
                            </>
                          ) : (
                            <button type="button" className={styles.smallButton} onClick={() => startLeadEdit(row)}>Edit</button>
                          )}
                          <button type="button" className={styles.smallButtonDanger} onClick={() => removeLead(row.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr>
                    <td colSpan={6}>No messages found.</td>
                  </tr>
                ) : (
                  messages.map((row) => (
                    <tr key={row.id}>
                      <td>{new Date(row.createdAt).toLocaleString('tr-TR')}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td className={styles.messageCell}>{row.message}</td>
                      <td>
                        <span className={row.status === 'new' ? styles.statusNew : styles.statusDone}>
                          {row.status.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <div className={styles.rowActions}>
                          <button
                            type="button"
                            className={styles.smallButton}
                            onClick={() => setMessageStatusById(row.id, row.status === 'new' ? 'done' : 'new')}
                          >
                            {row.status === 'new' ? 'Mark Done' : 'Mark New'}
                          </button>
                          <button type="button" className={styles.smallButtonDanger} onClick={() => removeMessage(row.id)}>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
