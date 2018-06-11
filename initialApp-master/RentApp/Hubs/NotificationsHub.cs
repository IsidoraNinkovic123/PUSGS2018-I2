﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace RentApp.Hubs
{
    [HubName("notifications")]
    public class NotificationsHub : Hub
    {
       //private static IHubContext HubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationsHub>();
       public void Hello()
        {
            Clients.All.hello();
        }

        public void GetRealTime()
        {
            Clients.All.setRealTime(DateTime.Now.ToString("h:mm:ss tt"));

        }
       
    }
}