<template>
    <div>
      <h1 class="counter">{{ visitorCount }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { supabase } from '../utils/supabase';
  import { useCookie } from '#app';
  import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
  
  const visitorCount = ref('...');
  const trackingCookie = useCookie('tracking');
  const userId = ref(trackingCookie.value || uuidv4()); // Generate a valid UUID
  
  const updateStatus = async (status) => {
    const payload = {
      id: userId.value,
      state: status,
      last_changed: new Date().toISOString(), // Proper timestamp format
    };
  
    console.log('Payload being sent:', payload);
  
    const { error } = await supabase.from('tempUser').upsert(payload);
  
    if (error) {
      console.error('Error updating status:', error.message);
    }
  };
  
  const fetchVisitorCount = async () => {
    const { data, error } = await supabase
      .from('tempUser')
      .select('*')
      .eq('state', 'online');
  
    if (error) {
      console.error('Error fetching visitor count:', error.message);
    } else {
      visitorCount.value = data.length;
    }
  };
  
  const trackUserStatus = async () => {
    if (!trackingCookie.value) {
      trackingCookie.value = userId.value;
    }
    await updateStatus('online');
    window.addEventListener('beforeunload', async () => {
      await updateStatus('offline');
    });
  };
  
  onMounted(() => {
    trackUserStatus();
    fetchVisitorCount();
    setInterval(fetchVisitorCount, 5000);
  });
  </script>
  
  <style scoped>

  </style>
  