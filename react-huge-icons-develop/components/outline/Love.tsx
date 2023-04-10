import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLove = (
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
            d='m12 5.703-.537.523a.75.75 0 0 0 1.074 0L12 5.703ZM12.685 5l.537.524L12.685 5Zm-1.37 0 .537-.524-.537.524Zm-7.861 7.76-.557.503.557-.503Zm5.726 6.338-.556.503.556-.503Zm5.64 0 .556.503-.556-.503Zm5.726-6.338.557.503-.557-.503ZM20.402 5l-.537.524.537-.524ZM3.598 5l.537.524L3.598 5ZM17 5.75a.75.75 0 0 0 0 1.5v-1.5Zm1.25 2.75a.75.75 0 0 0 1.5 0h-1.5Zm-5.713-2.274.685-.702-1.074-1.048-.685.703 1.074 1.047Zm-1.759-.702.685.702 1.074-1.047-.685-.703-1.074 1.048Zm-7.88 7.739L8.623 19.6l1.113-1.006-5.727-6.338-1.113 1.006ZM15.375 19.6l5.727-6.338-1.113-1.006-5.727 6.338 1.113 1.006Zm4.489-14.077c1.797 1.842 1.853 4.82.125 6.733l1.113 1.006c2.258-2.5 2.186-6.376-.164-8.787l-1.074 1.048Zm1.074-1.048a6.111 6.111 0 0 0-8.79 0l1.073 1.048a4.611 4.611 0 0 1 6.643 0l1.074-1.048ZM4.135 5.524a4.611 4.611 0 0 1 6.643 0l1.074-1.048a6.111 6.111 0 0 0-8.79 0l1.073 1.048ZM8.624 19.6a4.53 4.53 0 0 0 6.752 0l-1.113-1.006a3.03 3.03 0 0 1-4.526 0L8.624 19.6ZM3.06 4.476c-2.35 2.41-2.422 6.287-.164 8.787l1.113-1.006c-1.728-1.913-1.672-4.89.125-6.733L3.061 4.476ZM17 7.25c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 5.75v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLove);
export default ForwardRef;
