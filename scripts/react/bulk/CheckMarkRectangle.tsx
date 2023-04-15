import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCheckMarkRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M21.801 2.29c-.145.031-.228.089-.437.304-.142.146-2.166 2.36-4.497 4.92s-4.307 4.704-4.391 4.764a1.26 1.26 0 0 1-.332.161c-.254.071-.684.038-.904-.069-.099-.048-.981-.731-1.96-1.517-.979-.787-1.86-1.471-1.957-1.521-.381-.198-.82-.037-1.007.368a.66.66 0 0 0 .014.622c.076.15.38.411 1.97 1.685 1.034.829 1.973 1.564 2.087 1.633.462.282 1.115.42 1.681.357a2.706 2.706 0 0 0 1.602-.746c.244-.231 8.079-8.836 8.798-9.661.15-.173.218-.291.248-.429.119-.557-.34-.994-.915-.871'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCheckMarkRectangle);
export default ForwardRef;
