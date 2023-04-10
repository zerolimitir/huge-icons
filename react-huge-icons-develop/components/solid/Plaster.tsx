import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlaster = (
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
            fillRule='evenodd'
            d='m19.834 9.794-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04a3.98 3.98 0 1 1 5.628 5.628Zm-6.589-.454a1 1 0 0 0-1.414 0l-2.49 2.491a1 1 0 0 0 0 1.415l1.413 1.414a1 1 0 0 0 1.415 0l2.49-2.491a1 1 0 0 0 0-1.414L13.245 9.34Zm2.467-3.527a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-8.838 9.9a.75.75 0 1 0-1.061 1.06l1.414 1.414a.75.75 0 1 0 1.06-1.06l-1.413-1.415Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaster);
export default ForwardRef;
