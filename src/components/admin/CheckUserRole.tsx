"use client"
import React, {useEffect} from 'react'
import { useOrganizationList } from '@clerk/nextjs';

import { redirect } from 'next/navigation'

const CheckUserRole = () => {
   
    const { userMemberships, isLoaded, setActive } = useOrganizationList({
        userMemberships:{
            infinite:true,
        }
    });

    useEffect(() => {
        const {isLoading, isFetching, data} = userMemberships;
        if (!isLoading && !isFetching) {
          
        if (userMemberships.data?.length === 0) return;
          console.log(userMemberships)
          return
           // Find the admin organization from the loaded organization list
           const adminOrganization = (userMemberships.data[0]?.role)

           console.log(adminOrganization)
           return;
      
          // If the user is not an admin, redirect to the homepage
          if (!adminOrganization) {
            redirect('/'); // Replace '/' with the homepage URL
          } else {
            // If the user is an admin, no need to wait for the organization list; render the admin page directly
            // setShowLoader(false);
          }
        }
      }, [isLoaded, userMemberships]);
   
  return (
    <div>CheckUserRole</div>
  )
}

export default CheckUserRole





/*
import React from 'react'
import { useSession } from "@clerk/nextjs";
import { checkUserRole } from "@/lib/utils";

const CheckUserRole = () => {
    const { session } = useSession();
    const userRole = checkUserRole(session);
    console.log(userRole)
  return (
    <div>CheckUserRole</div>
  )
}

export default CheckUserRole
*/