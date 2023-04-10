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
            d='M14.206 4.166a3.98 3.98 0 1 1 5.628 5.628l-10.04 10.04a3.98 3.98 0 0 1-5.628-5.628l10.04-10.04Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M11.831 9.34a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 0 1 0 1.414l-2.49 2.49a1 1 0 0 1-1.415 0L9.34 13.246a1 1 0 0 1 0-1.414l2.491-2.49Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.712 5.813a.75.75 0 0 1 1.061 0l1.414 1.414a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Zm-9.899 9.9a.75.75 0 0 1 1.06 0l1.415 1.414a.75.75 0 1 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaster);
export default ForwardRef;
