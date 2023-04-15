import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgReward = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.002 18.41c.001 1.808.013 2.322.055 2.44.079.221.241.414.454.539.158.093.235.111.469.111.27 0 .344-.026 2.02-.7 1.632-.656 1.756-.7 2-.7s.368.044 2 .7c1.676.674 1.75.7 2.02.7.234 0 .311-.018.469-.111.213-.125.375-.318.454-.539.042-.118.054-.632.055-2.44a89.862 89.862 0 0 0-.013-2.29 2.32 2.32 0 0 0-.19.062c-.096.034-.526.095-.955.135-1.112.105-1.265.167-2.047.833-.814.693-1.1.825-1.793.825-.693 0-.98-.132-1.794-.825-.784-.667-.935-.728-2.046-.833-.429-.04-.859-.101-.955-.135a2.32 2.32 0 0 0-.19-.062c-.008 0-.014 1.031-.013 2.29'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReward);
export default ForwardRef;
