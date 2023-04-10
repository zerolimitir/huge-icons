import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellNotification = (
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
        <path fill='currentColor' d='M12 21c1.385 0 2.563-.835 3-2H9c.437 1.165 1.615 2 3 2Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M18.141 9.835a4 4 0 0 1-5.04-4.737 6.209 6.209 0 0 0-1.1-.098c-3.23 0-5.946 2.49-6.32 5.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 17.096 4.261 19 5.83 19h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.345-3.044a6.777 6.777 0 0 0-.179-.96Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <circle cx={17} cy={6} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgBellNotification);
export default ForwardRef;
