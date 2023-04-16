import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckMarkRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.493 1.282a4.698 4.698 0 0 0-1.593.477c-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.056.446-.056 12.65 0 13.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.679-.679 1.042-1.301 1.263-2.165.155-.608.162-.887.15-5.714-.012-4.634-.013-4.681-.094-4.819a1.003 1.003 0 0 0-.249-.257c-.14-.099-.205-.117-.409-.117s-.269.018-.409.117c-.092.064-.204.18-.249.257-.081.138-.082.191-.102 5.059l-.02 4.92-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 19l-.132-.38V5.38L2.912 5c.186-.535.404-.883.804-1.284.401-.4.749-.618 1.284-.804l.38-.132 5.92-.02c6.569-.022 6.037.002 6.274-.28.292-.347.21-.85-.18-1.108l-.168-.112-5.703-.005c-3.137-.003-5.85.01-6.03.027M20.82 3.276a.978.978 0 0 0-.214.087c-.051.031-1.841 2.001-3.978 4.377a739.744 739.744 0 0 1-4.007 4.436c-.16.154-.487.301-.731.33a1.375 1.375 0 0 1-.789-.199c-.067-.047-.925-.727-1.907-1.513-.983-.785-1.828-1.45-1.88-1.477a.886.886 0 0 0-.313-.053c-.27-.004-.476.109-.633.347a.774.774 0 0 0-.027.745c.125.216 3.831 3.165 4.225 3.362.443.222.823.298 1.35.271.689-.036 1.218-.257 1.696-.707.327-.307 7.929-8.746 8.046-8.931.11-.175.11-.521-.001-.711-.161-.275-.536-.439-.837-.364'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkRectangle);
export default ForwardRef;