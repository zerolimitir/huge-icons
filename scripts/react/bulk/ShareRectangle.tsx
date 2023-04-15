import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShareRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.7 7.316c-.394.181-.558.605-.383.989.086.19.148.242.898.753.473.322.541.381.46.399-.863.188-1.505.378-2.075.613-2.636 1.086-4.205 3.095-4.347 5.563-.035.617.079.885.445 1.052.518.235 1.059-.153 1.061-.76a5.825 5.825 0 0 1 .225-1.353c.54-1.656 2.167-2.941 4.416-3.49.53-.129 1.036-.219 1.066-.19.011.011-.231.396-.537.854-.658.986-.689 1.042-.689 1.249 0 .213.059.358.212.52.285.3.739.332 1.023.072.178-.162 2.239-3.295 2.267-3.445a.737.737 0 0 0-.113-.548c-.061-.091-.565-.454-1.589-1.142-.825-.554-1.589-1.054-1.698-1.11-.233-.12-.422-.128-.642-.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShareRectangle);
export default ForwardRef;
