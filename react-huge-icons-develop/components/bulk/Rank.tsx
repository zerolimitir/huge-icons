import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRank = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M9 9.5A1.5 1.5 0 0 1 10.5 8h3A1.5 1.5 0 0 1 15 9.5v11a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 20.5v-11Z'
        />
        <path
            fill='currentColor'
            d='M15 15.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-5Zm-12-2A1.5 1.5 0 0 1 4.5 12h3A1.5 1.5 0 0 1 9 13.5v7A1.5 1.5 0 0 1 7.5 22h-3A1.5 1.5 0 0 1 3 20.5v-7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11.524 1.964a.5.5 0 0 1 .952 0l.156.482a.5.5 0 0 0 .476.346h.508a.5.5 0 0 1 .293.904l-.41.299a.5.5 0 0 0-.182.559l.157.483a.5.5 0 0 1-.77.559l-.41-.299a.5.5 0 0 0-.588 0l-.41.299a.5.5 0 0 1-.77-.56l.157-.482a.5.5 0 0 0-.182-.56l-.41-.298a.5.5 0 0 1 .293-.904h.508a.5.5 0 0 0 .476-.346l.156-.482Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRank);
export default ForwardRef;
