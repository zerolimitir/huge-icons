import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCargo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278a.883.883 0 0 0-.481.374c-.059.108-.073.274-.09 1.077l-.02.95-2.59 2.155-2.589 2.154-.33.028c-1.726.144-3.112 1.293-3.58 2.967l-.111.397v7.24l.106.382a3.981 3.981 0 0 0 1.053 1.819c.609.61 1.302.968 2.162 1.118.526.092 12.792.092 13.318 0a3.868 3.868 0 0 0 2.162-1.118c.516-.515.854-1.1 1.053-1.819l.106-.382v-7.24l-.108-.391a4.016 4.016 0 0 0-3.585-2.973l-.332-.028-2.587-2.155-2.588-2.155-.02-.949c-.018-.863-.027-.962-.102-1.088a.807.807 0 0 0-.847-.363m2.015 5.224 1.775 1.478-1.8.01c-.991.006-2.611.006-3.601 0l-1.801-.01 1.789-1.49c.984-.82 1.806-1.485 1.827-1.478.02.006.835.677 1.811 1.49m-6.421 4.879c.08.051.188.162.24.246l.095.153v6.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V11.78l.093-.149c.233-.375.691-.484 1.052-.25m5 0c.08.051.188.162.24.246l.095.153v6.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V11.78l.093-.149c.233-.375.691-.484 1.052-.25m5 0c.08.051.188.162.24.246l.095.153v6.453l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V11.78l.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCargo);
export default ForwardRef;
