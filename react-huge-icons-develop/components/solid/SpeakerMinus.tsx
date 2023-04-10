import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeakerMinus = (
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
            d='M7.533 7.602 11.8 4.403c1.318-.988 3.2-.048 3.2 1.6v11.994c0 1.648-1.882 2.588-3.2 1.6l-4.267-3.2a2 2 0 0 0-1.2-.399H4A2 2 0 0 1 2 14v-3.998a2 2 0 0 1 2-2h2.334a2 2 0 0 0 1.2-.399Zm9.717 3.648a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerMinus);
export default ForwardRef;
