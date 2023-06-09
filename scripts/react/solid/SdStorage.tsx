import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSdStorage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10 2.061a4.074 4.074 0 0 0-1.773.765c-.344.26-3.214 3.136-3.446 3.454a4.228 4.228 0 0 0-.74 1.821c-.032.229-.042 1.758-.032 5.439l.013 5.12.11.378c.441 1.509 1.585 2.572 3.099 2.88.405.083.48.084 4.9.073l4.489-.011.391-.108c1.505-.415 2.597-1.581 2.907-3.102.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.043 5.043 0 0 0-1.311-.599c-.335-.088-.369-.089-3.478-.098-2.505-.007-3.209.002-3.48.046m1.405 2.32c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V6.007c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25m3 0c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V6.007c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25m3 0c.08.051.188.162.24.246.095.152.095.158.095 1.38v1.226l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172V6.007c0-1.214.001-1.229.093-1.376.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSdStorage);
export default ForwardRef;
