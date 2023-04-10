import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPress = (
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
            d='M10 7v6l-1.414-1.414A2 2 0 0 0 7.172 11h-.066a2 2 0 0 0-1.82 2.828l2.648 5.827A4 4 0 0 0 11.576 22h4.103a4 4 0 0 0 3.473-2.015l.321-.563A4 4 0 0 0 20 17.438V17a4 4 0 0 0-4-4h-2V7a2 2 0 1 0-4 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 2.75A5.25 5.25 0 0 0 6.75 8a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPress);
export default ForwardRef;
