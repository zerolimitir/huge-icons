import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.28 9.082c-1.843.476-2.799 2.484-1.997 4.196l.12.258 2.059-2.058a246.38 246.38 0 0 0 2.058-2.07c0-.039-.548-.258-.816-.327a3.199 3.199 0 0 0-1.424.001m1.239 3.459-2.056 2.056.298.137c1.699.779 3.696-.182 4.161-2.002a3.352 3.352 0 0 0-.003-1.465c-.076-.291-.257-.729-.316-.765-.016-.01-.953.908-2.084 2.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatBlock);
export default ForwardRef;
