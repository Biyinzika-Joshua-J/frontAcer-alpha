import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
    text:string;
    classes:string;
    link?:string;
}

const ButtonPrimary = ({text, classes, link}:Props) => {
  return (
    <Button className={`${classes}`} asChild>
        <Link href="/sign-up">{text}</Link>
    </Button>
  )
}

export default ButtonPrimary