import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadLocationHorizontal = (
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
            d='M16 6c0 1.157-.548 2.747-1.358 4-.736 1.14-1.69 2-2.642 2-.953 0-1.905-.86-2.642-2C8.548 8.747 8 7.157 8 6a4 4 0 1 1 8 0Zm-2.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 8h.814c.286.987.745 1.98 1.284 2.814.428.662.953 1.3 1.566 1.787.605.481 1.402.899 2.336.899.934 0 1.731-.418 2.336-.899.613-.487 1.138-1.125 1.566-1.787.54-.835.998-1.827 1.284-2.814H18a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm6.5 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Zm6.25.75a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM7 14.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadLocationHorizontal);
export default ForwardRef;
