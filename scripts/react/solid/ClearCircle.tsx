import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClearCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m5.253 9.316c.242.151.36.363.36.648 0 .2-.019.267-.117.406-.064.092-.18.204-.257.249-.138.081-.178.082-4.359.082s-4.221-.001-4.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.988-.028 4.265-.024l4.14.006.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClearCircle);
export default ForwardRef;
