import { useEffect } from "react"
import Pusher from 'pusher-js'

const useNotification = ({ userId, role, onMessage }) => {
    const shouldRun = userId && role;
    useEffect(() => {
        if (!userId || !role) {
            console.log("🔒 useNotification tidak dijalankan: userId atau role kosong");
            return;
          }

        const pusher = new Pusher('7391d8200d7c87d4cb27', {
            cluster: 'ap1',
            forceTLS: true,
            enabledTransports: ['ws', 'wss']
        });

        const channelName = `${role}_${userId}`;
        const channel = pusher.subscribe(channelName);

        channel.bind('new_sidang', function (data) {
            console.log('📢 Notifikasi masuk:', data);
            if (onMessage) {
                onMessage(data);
            } else {
                alert(data.message);
            }
        });

        return () => {
            channel.unbind_all();
            pusher.unsubscribe(channelName);
        };
    }, [shouldRun]);
};


export default useNotification