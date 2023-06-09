import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIdea = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.48 2.104c-.869.103-1.481.253-2.085.511a7.049 7.049 0 0 0-3.637 3.48 6.86 6.86 0 0 0-.572 1.628 7.423 7.423 0 0 0 .615 5.017c.338.674.649 1.118 1.263 1.801.728.812.892 1.156.927 1.949l.02.47h3.229v-5.185l-.901-.938c-.496-.515-.931-.991-.966-1.057a.818.818 0 0 1-.087-.59.723.723 0 0 1 .985-.53c.101.04.406.323.939.87l.79.81.79-.808c.435-.444.848-.836.918-.87a.718.718 0 0 1 .594.013c.407.185.554.684.325 1.105-.035.066-.47.542-.966 1.057l-.901.938v5.185h3.229l.02-.47c.034-.767.223-1.182.848-1.862.885-.963 1.4-1.804 1.756-2.87a7.527 7.527 0 0 0-.825-6.472c-1.1-1.679-2.747-2.769-4.688-3.106-.356-.062-1.349-.109-1.62-.076M8.011 18.95c.123 2.493 2.295 4.319 4.649 3.909a3.981 3.981 0 0 0 2.056-1.062 4.19 4.19 0 0 0 1.273-2.847l.023-.47H7.988l.023.47'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdea);
export default ForwardRef;
