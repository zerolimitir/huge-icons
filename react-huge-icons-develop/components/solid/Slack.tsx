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
            fillRule='evenodd'
            d='M9.319 6.138a2 2 0 1 1 2-2v2h-2Zm5.311-3.902a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0v-5a2 2 0 0 0-2-2Zm5.212 9a2 2 0 1 0-2-2v2h2Zm-3.212 8.626a2 2 0 0 0-2-2h-2v2a2 2 0 0 0 4 0ZM2.15 14.637a2 2 0 0 1 2-2h2v2a2 2 0 1 1-4 0Zm7.14-2a2 2 0 0 0-2 2v5.225a2 2 0 1 0 4 0v-5.225a2 2 0 0 0-2-2Zm.13-5.4a2 2 0 1 1 0 4H4.15a2 2 0 1 1 0-4h5.27Zm12.423 7.4a2 2 0 0 0-2-2H14.63a2 2 0 0 0 0 4h5.212a2 2 0 0 0 2-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSlack);
export default ForwardRef;
