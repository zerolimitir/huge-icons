import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSendFast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 9.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.271.058 2.053.058 2.324 0 .758-.163.758-1.269 0-1.432-.253-.054-2.109-.052-2.355.003m6.409 2.01c-.485.211-.606.85-.234 1.237.217.227.211.226 2.267.225 1.753-.001 1.903-.006 2.051-.075a.734.734 0 0 0 .398-.413c.154-.368-.018-.78-.398-.955-.149-.069-.296-.074-2.06-.074-1.509.001-1.926.012-2.024.055m-6.409 1.99a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.271.058 2.053.058 2.324 0 .758-.163.758-1.269 0-1.432-.253-.054-2.109-.052-2.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSendFast);
export default ForwardRef;
