import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.968 2.285c-.196.057-.427.309-.482.526-.061.244-.065 4.66-.004 4.88.053.188.255.424.426.495.104.043.603.054 2.521.054 2.684 0 2.536.016 2.79-.298.11-.136.121-.176.121-.442s-.011-.306-.121-.442c-.244-.301-.225-.298-1.818-.298a57.62 57.62 0 0 1-1.931-.026l-.51-.026-.001-1.924c-.001-2.14.001-2.122-.275-2.354a.747.747 0 0 0-.716-.145'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
