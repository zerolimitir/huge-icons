import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFavourite = (
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
            d='m12 5.524-.549.511a.75.75 0 0 0 1.098 0L12 5.525Zm.765-.822-.549-.51.549.51Zm-1.53 0 .549-.51-.549.51Zm-7.65 8.22-.55.51.55-.51Zm6.885 7.397.549-.51-.55.51Zm3.06 0-.549-.51.55.51Zm6.886-7.397-.55-.511.55.51Zm0-8.22.549-.51-.55.51Zm-16.832 0-.549-.51.55.51Zm8.965 1.333.765-.822-1.098-1.022-.765.822 1.098 1.022Zm-1.863-.822.765.822 1.098-1.022-.765-.822-1.098 1.022Zm-7.65 8.22L9.92 20.83l1.098-1.022-6.886-7.397-1.098 1.022Zm11.043 7.397 6.886-7.397-1.099-1.022-6.885 7.397 1.098 1.022Zm5.787-15.617c1.845 1.982 1.845 5.216 0 7.198l1.099 1.022c2.38-2.558 2.38-6.684 0-9.242l-1.099 1.022Zm1.099-1.022c-2.41-2.588-6.34-2.588-8.749 0l1.098 1.022c1.816-1.95 4.736-1.95 6.552 0l1.099-1.022ZM4.133 5.213c1.816-1.95 4.737-1.95 6.553 0l1.098-1.022c-2.41-2.588-6.34-2.588-8.749 0l1.098 1.022ZM9.921 20.83a2.81 2.81 0 0 0 4.158 0l-1.098-1.022c-.548.59-1.414.59-1.962 0L9.92 20.83ZM3.035 4.191c-2.38 2.558-2.38 6.684 0 9.242l1.098-1.022c-1.844-1.982-1.844-5.216 0-7.198L3.035 4.191Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFavourite);
export default ForwardRef;
