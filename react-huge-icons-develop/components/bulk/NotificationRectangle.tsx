import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationRectangle = (
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
        <path fill='currentColor' d='M22 7a5.002 5.002 0 0 1-5 5 5 5 0 1 1 5-5Z' />
        <path
            fill='currentColor'
            d='M12 7a5 5 0 0 0 6 4.9V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h6.1c-.066.323-.1.658-.1 1Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationRectangle);
export default ForwardRef;
