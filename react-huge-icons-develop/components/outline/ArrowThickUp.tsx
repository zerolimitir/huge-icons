import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickUp = (
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
            d='M9 11h.75a.75.75 0 0 0-.75-.75V11Zm6 0v-.75a.75.75 0 0 0-.75.75H15Zm2.549-1.659-.565.494.565-.494Zm-11.098 0 .565.494-.565-.494ZM8.25 11v8h1.5v-8h-1.5ZM11 21.75h2v-1.5h-2v1.5ZM15.75 19v-8h-1.5v8h1.5ZM15 11.75h1.796v-1.5H15v1.5Zm3.113-2.902L14.07 4.226l-1.13.988 4.044 4.621 1.13-.987ZM9.93 4.226 5.887 8.848l1.129.987 4.043-4.621-1.129-.988ZM7.204 11.75H9v-1.5H7.204v1.5Zm6.866-7.524a2.75 2.75 0 0 0-4.14 0l1.13.988a1.25 1.25 0 0 1 1.88 0l1.13-.988Zm2.726 7.524c1.504 0 2.307-1.77 1.317-2.902l-1.129.987a.25.25 0 0 1-.188.415v1.5ZM13 21.75A2.75 2.75 0 0 0 15.75 19h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM5.887 8.848c-.99 1.131-.187 2.902 1.317 2.902v-1.5a.25.25 0 0 1-.188-.415l-1.13-.987ZM8.25 19A2.75 2.75 0 0 0 11 21.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickUp);
export default ForwardRef;
