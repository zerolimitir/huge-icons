import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M11.815 5.277a.8.8 0 0 0-.462.354l-.093.149-.011 5.198-.01 5.198-1.43-1.424c-1.384-1.379-1.435-1.425-1.63-1.465-.35-.073-.643.048-.823.339-.121.197-.124.548-.005.738.047.075 1.026 1.075 2.177 2.222 2.007 2.001 2.1 2.087 2.282 2.125a.935.935 0 0 0 .38 0c.183-.037.273-.121 2.336-2.185 2.064-2.063 2.148-2.153 2.185-2.336.09-.436-.14-.818-.545-.905a.908.908 0 0 0-.255-.028 2.926 2.926 0 0 1-.171.043c-.088.019-.501.406-1.55 1.452l-1.43 1.425-.001-5.078c-.001-3.346-.015-5.14-.042-5.258a.747.747 0 0 0-.902-.564'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
