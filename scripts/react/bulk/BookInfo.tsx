import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 5.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m.12 3.221a.734.734 0 0 0-.398.413c-.053.126-.062.396-.061 1.78.001 1.5.007 1.644.075 1.791a.734.734 0 0 0 .413.398c.368.154.78-.018.955-.398.068-.147.074-.29.074-1.8s-.006-1.653-.074-1.8c-.181-.392-.607-.558-.984-.384m-5.32 7.743c-1.155.255-2.01 1.093-2.305 2.26-.071.282-.082.411-.063.76.028.528.099.801.335 1.281.157.32.243.437.55.743.306.307.423.393.743.55.721.354.193.327 6.36.327 6.167 0 5.639.027 6.36-.327.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.324-.66.32-.633.337-2.61l.015-1.75-6.692.003c-5.395.003-6.74.014-6.933.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookInfo);
export default ForwardRef;
