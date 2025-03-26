"use client";
import Layout from '@/components/Layout';
import React from 'react'

const Dashboard = () => {
  return (
    <Layout>
      <div className="">
        <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
        <p className="mt-2">This is where you can manage your settings and content.</p>
      </div>
    </Layout>
  )
}

export default Dashboard;