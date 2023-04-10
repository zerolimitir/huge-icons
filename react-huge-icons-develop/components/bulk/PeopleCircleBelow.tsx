import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPeopleCircleBelow = (
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
            d='M8.508 16.234C5.272 16.69 3 17.756 3 19c0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.244-2.272-2.311-5.508-2.766a3.5 3.5 0 0 1-6.984 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0a4 4 0 0 0-4 4v1a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a2 2 0 1 0 4 0v-3a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPeopleCircleBelow);
export default ForwardRef;
