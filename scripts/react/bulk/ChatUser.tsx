import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.438 8.075a1.984 1.984 0 0 0-.872.542A1.91 1.91 0 0 0 10 10c0 .535.184.986.566 1.383.254.265.523.431.869.538l.219.068-.27.047a4.28 4.28 0 0 0-1.639.654c-.585.397-1.229 1.177-1.369 1.658-.189.65.271 1.328 1.069 1.577.225.07.402.075 2.555.075s2.33-.005 2.555-.075c.614-.191 1.036-.639 1.11-1.175.09-.661-.838-1.813-1.885-2.34a4.93 4.93 0 0 0-1.164-.374l-.27-.047.219-.068a1.94 1.94 0 0 0 .869-.538A1.91 1.91 0 0 0 14 10c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatUser);
export default ForwardRef;
