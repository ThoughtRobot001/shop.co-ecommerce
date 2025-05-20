<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-1 flex flex-col">
        <DashboardHeader />
        <router-view />
      </div>
    </div>
  </template>
  