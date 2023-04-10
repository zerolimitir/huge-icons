import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowThickDown = (
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
            d='M15 13h-.75c0 .414.336.75.75.75V13Zm-6 0v.75a.75.75 0 0 0 .75-.75H9Zm-2.549 1.659.565-.494-.565.494Zm11.098 0-.565-.494.565.494ZM15.75 13V5h-1.5v8h1.5ZM13 2.25h-2v1.5h2v-1.5ZM8.25 5v8h1.5V5h-1.5ZM9 12.25H7.204v1.5H9v-1.5Zm-3.113 2.902 4.043 4.622 1.13-.988-4.044-4.621-1.13.987Zm8.183 4.622 4.043-4.622-1.129-.987-4.043 4.62 1.129.989Zm2.726-7.524H15v1.5h1.796v-1.5ZM9.93 19.774a2.75 2.75 0 0 0 4.14 0l-1.13-.988a1.25 1.25 0 0 1-1.88 0l-1.13.988ZM7.204 12.25c-1.504 0-2.307 1.77-1.317 2.902l1.129-.987a.25.25 0 0 1 .188-.415v-1.5ZM11 2.25A2.75 2.75 0 0 0 8.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm7.113 12.902c.99-1.131.187-2.902-1.317-2.902v1.5a.25.25 0 0 1 .188.415l1.13.987ZM15.75 5A2.75 2.75 0 0 0 13 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowThickDown);
export default ForwardRef;
