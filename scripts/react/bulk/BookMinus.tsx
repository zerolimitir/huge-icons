import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.7 8.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m-2.32 7.743c-1.155.255-2.01 1.093-2.305 2.26-.071.282-.082.411-.063.76.028.528.099.801.335 1.281.157.32.243.437.55.743.306.307.423.393.743.55.721.354.193.327 6.36.327 6.167 0 5.639.027 6.36-.327.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.324-.66.32-.633.337-2.61l.015-1.75-6.692.003c-5.395.003-6.74.014-6.933.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMinus);
export default ForwardRef;
