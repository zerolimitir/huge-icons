import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSlack = (
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
            d='M12.63 4.236a2 2 0 0 1 4 0v5a2 2 0 1 1-4 0v-5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M21.842 9.236a2 2 0 0 1-2 2h-2v-2a2 2 0 1 1 4 0ZM16.63 19.862a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM7.319 4.138a2 2 0 0 0 2 2h2v-2a2 2 0 1 0-4 0Zm-5.17 10.499a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Z'
        />
        <path
            fill='currentColor'
            d='M7.29 14.637a2 2 0 1 1 4 0v5.225a2 2 0 0 1-4 0v-5.225Zm2.13-7.401a2 2 0 1 1 0 4H4.148a2 2 0 1 1 0-4h5.27Zm10.422 5.401a2 2 0 0 1 0 4H14.63a2 2 0 0 1 0-4h5.212Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSlack);
export default ForwardRef;
