"use client";

import React from "react";
import DashboardHeader from "./DashboardHeader";
import WalletCard from "./WalletCard";
import StatsCards from "./StatsCards";
import EarningsChart from "./EarningsChart";
import RecentActivity from "./RecentActivity";
import RecentRequestsTable from "./RecentRequestsTable";
import OngoingOrdersTable from "./OngoingOrdersTable";
// Dummy data will be used instead of API hook

export default function DashboardView() {
    // Static dummy data
    const dummyData = {
        stats: {
            active_requests: 12,
            new_offer_received: 24,
            completed_orders: 8,
        },
        recent_activity: [
            { id: 1, type: "login", date: "2023-01-01" },
            { id: 2, type: "purchase", date: "2023-01-02" },
        ],
        recent_requests: [],
        recent_orders: [],
    };
    const { stats, recent_activity: recentActivity, recent_requests: recentRequests, recent_orders: ongoingOrders } = dummyData;
    const earningsData = [
        { day: "Mon", amount: 4500 },
        { day: "Tue", amount: 6200 },
        { day: "Wed", amount: 5800 },
        { day: "Thu", amount: 6500 },
        { day: "Fri", amount: 5200 },
        { day: "Sat", amount: 4800 },
        { day: "Sun", amount: 7500 },
    ];
    const isLoading = false;

    return (
        <div className="w-full bg-white relative">
            {isLoading && (
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#144E42]"></div>
                </div>
            )}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8">
                <DashboardHeader />
                <WalletCard />
                <StatsCards stats={stats} />

                {/* Chart and Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <EarningsChart data={earningsData} />
                    <RecentActivity activities={recentActivity} />
                </div>

                <RecentRequestsTable requests={recentRequests} />
                <OngoingOrdersTable orders={ongoingOrders} />
            </div>
        </div>
    );
}
