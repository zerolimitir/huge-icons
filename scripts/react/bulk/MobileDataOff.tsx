import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMobileDataOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.807 3.288c-.375.083-.605.482-.518.902.038.182.121.272 1.995 2.151L7.24 8.302v9.877l-.91-.908c-.591-.59-.962-.93-1.059-.97a.735.735 0 0 0-1.031.679c0 .102.034.249.076.332.042.081.524.591 1.07 1.133.977.967 1 .987 1.374 1.166.861.413 1.619.413 2.48 0 .374-.179.397-.199 1.374-1.166.546-.542 1.028-1.052 1.07-1.133.244-.476-.113-1.072-.643-1.072-.309 0-.425.087-1.371 1.031l-.91.908V9.82l5.43 5.426c4.45 4.446 5.458 5.434 5.585 5.474.624.198 1.184-.431.908-1.02-.052-.112-2.529-2.612-8.189-8.266C5.535 4.482 4.36 3.324 4.24 3.301l-.2-.039a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMobileDataOff);
export default ForwardRef;
