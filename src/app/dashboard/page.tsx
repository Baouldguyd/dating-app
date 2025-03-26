"use client";
import UserHeader from '@/components/Header/UserHeader';
import Layout from '@/components/Layout';
import UserCards from '@/components/UserCards/UserCards';
import React from 'react'

const Dashboard = () => {
  return (
    <Layout>
      <div className=" flex flex-col gap-4">
        <UserHeader/>
        <UserCards/>
      </div>
    </Layout>
  )
}

export default Dashboard;