import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckMarkCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M21.82 2.276a.923.923 0 0 0-.212.087c-.051.031-.594.606-1.206 1.277l-1.189 1.3c-.042.044-1.538 1.685-3.324 3.648-1.786 1.962-3.307 3.612-3.379 3.667-.342.261-.809.311-1.25.135-.066-.026-.967-.725-2.003-1.553-1.036-.827-1.943-1.525-2.016-1.551-.365-.127-.756.048-.925.414a.66.66 0 0 0 .014.622c.076.151.385.414 2.019 1.723 2.032 1.627 2.223 1.757 2.774 1.891.368.09.95.083 1.335-.015a2.97 2.97 0 0 0 1.178-.638c.132-.123 1.622-1.745 3.312-3.605l4.348-4.788c.702-.772 1.314-1.463 1.359-1.536.113-.178.114-.522.002-.714-.161-.275-.536-.439-.837-.364'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkCircle);
export default ForwardRef;
