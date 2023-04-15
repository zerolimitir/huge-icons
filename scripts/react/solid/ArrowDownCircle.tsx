import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.285 5.342c.08.051.188.162.24.246l.095.153.02 3.19.02 3.191.88-.885c.552-.555.94-.912 1.04-.959a.734.734 0 0 1 .983.983c-.049.107-.614.697-1.689 1.767-1.365 1.359-1.639 1.613-1.774 1.649-.199.054-.241.054-.44 0-.135-.036-.409-.29-1.774-1.649-1.075-1.07-1.64-1.66-1.689-1.767a.734.734 0 0 1 .983-.983c.1.047.488.404 1.04.959l.88.885.02-3.191.02-3.19.093-.149c.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDownCircle);
export default ForwardRef;
