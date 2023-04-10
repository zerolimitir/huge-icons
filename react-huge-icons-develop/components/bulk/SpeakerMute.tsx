import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeakerMute = (
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
            d='m11.8 4.403-4.267 3.2a2 2 0 0 1-1.2.399H4A2 2 0 0 0 2 10v3.998a2 2 0 0 0 2 2h2.334a2 2 0 0 1 1.2.399l4.266 3.199c1.318.988 3.2.048 3.2-1.6V6.003c0-1.648-1.882-2.588-3.2-1.6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.47 9.47a.75.75 0 0 1 1.06 0L20 10.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L21.06 12l1.47 1.47a.75.75 0 1 1-1.06 1.06L20 13.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L18.94 12l-1.47-1.47a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerMute);
export default ForwardRef;
