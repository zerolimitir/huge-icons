import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashAuto = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M18.34 1.277a.694.694 0 0 0-.388.23c-.072.076-.519 1.1-1.375 3.153-.697 1.672-1.283 3.103-1.301 3.18-.046.19.05.512.193.649a.87.87 0 0 0 .557.231c.189 0 .471-.135.569-.274.042-.058.225-.462.406-.896l.33-.79h2.338l.351.841c.279.667.379.865.485.958a.768.768 0 0 0 .859.099c.248-.128.429-.49.379-.758-.014-.07-.601-1.512-1.306-3.204-.866-2.077-1.317-3.113-1.389-3.19a.752.752 0 0 0-.708-.229M7.529 7.71c-2.448 3.128-4.461 5.715-4.474 5.749-.021.054.243.061 2.461.061H8l.01 4.228.01 4.229 4.475-5.719 4.475-5.718-2.485-.01L12 10.519l-.01-4.248-.01-4.248L7.529 7.71m11.286-3 .221.53h-1.072l.222-.53c.122-.291.241-.584.265-.65l.043-.119.05.119.271.65'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashAuto);
export default ForwardRef;
