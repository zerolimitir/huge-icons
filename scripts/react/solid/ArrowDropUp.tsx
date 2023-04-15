import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 7.003c-.132.02-.375.102-.54.183-.572.28-.563.268-2.627 3.817-1.016 1.748-1.877 3.267-1.914 3.377-.036.11-.076.335-.088.5-.065.923.573 1.814 1.466 2.047.239.062.602.069 4.011.071 2.59.001 3.814-.012 3.96-.042.546-.114 1.135-.561 1.364-1.036.24-.498.287-1.065.129-1.54-.037-.11-.898-1.628-1.914-3.373-1.319-2.267-1.904-3.235-2.047-3.39a2.02 2.02 0 0 0-1.8-.614'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropUp);
export default ForwardRef;
