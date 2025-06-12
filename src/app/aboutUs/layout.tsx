'use client';


import { PageLayout } from "@components";
import { PropsWithChildren } from "react";

interface PageLayoutprops extends PropsWithChildren { }

export default function AboutUsLayout({ children }: PageLayoutprops) {
    return <PageLayout>{children}</PageLayout>
}