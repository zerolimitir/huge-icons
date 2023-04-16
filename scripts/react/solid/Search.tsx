import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.04 1.265a10.264 10.264 0 0 0-8.72 5.686C1.073 9.458.911 12.337 1.867 15c.821 2.285 2.502 4.251 4.676 5.469 1.666.934 3.749 1.4 5.618 1.258 2.214-.168 4.089-.905 5.831-2.293l.213-.169 1.687 1.686c1.154 1.153 1.735 1.706 1.837 1.748a.735.735 0 0 0 1.031-.679.84.84 0 0 0-.064-.312c-.035-.07-.821-.887-1.747-1.816l-1.684-1.687.169-.213c1.391-1.746 2.132-3.639 2.293-5.853.136-1.874-.327-3.935-1.258-5.596-1.483-2.646-4.026-4.508-6.939-5.08a11.444 11.444 0 0 0-2.49-.198m1.352 1.537c3.336.36 6.148 2.535 7.305 5.649a8.748 8.748 0 0 1-2.016 9.229 8.644 8.644 0 0 1-6.181 2.56 8.727 8.727 0 0 1-8.74-8.74c0-2.335.909-4.532 2.559-6.181a8.739 8.739 0 0 1 5.241-2.515 11.55 11.55 0 0 1 1.832-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;