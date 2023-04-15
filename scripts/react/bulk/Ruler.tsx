import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRuler = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.937 8.196c-.219.099-.408.335-.44.551-.057.38-.045.399.895 1.343l.866.871.531-.53.531-.53-.81-.815c-.503-.506-.871-.843-.97-.889a.677.677 0 0 0-.603-.001m-3.12 3.12c-.329.149-.498.48-.436.854.026.155.105.247.892 1.041l.864.87.532-.53.531-.53-.81-.815c-.503-.506-.871-.843-.97-.889a.677.677 0 0 0-.603-.001m-3.117 3.12c-.38.175-.551.586-.399.955.04.096.358.446.89.979l.828.83.531-.53.53-.529-.81-.815c-.503-.506-.871-.843-.97-.889a.67.67 0 0 0-.6-.001m-3.05 3.078c-.261.075-.527.436-.529.717-.002.269.108.415.95 1.259l.828.83.531-.53.53-.529-.85-.851c-.875-.877-.954-.935-1.25-.926a1.05 1.05 0 0 0-.21.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;
