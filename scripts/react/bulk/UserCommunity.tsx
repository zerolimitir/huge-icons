import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserCommunity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.811 1.278c-.52.127-.732.789-.385 1.202.179.213.301.25.94.285a9.41 9.41 0 0 1 1.994.299c3.188.828 5.747 3.387 6.576 6.576a9.51 9.51 0 0 1 .298 2c.036.632.074.756.286.934a.75.75 0 0 0 1.204-.386c.097-.355-.051-1.792-.281-2.728-1.037-4.221-4.525-7.428-8.783-8.075-.618-.094-1.656-.154-1.849-.107m-6.191.761a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075m-3.809 9.239a.883.883 0 0 0-.481.374c-.147.269-.059 1.607.175 2.668a10.769 10.769 0 0 0 7.955 8.123c.95.233 2.372.378 2.739.278.618-.168.742-.988.203-1.344-.15-.099-.204-.109-.8-.14-1.402-.075-2.458-.347-3.702-.956a9.23 9.23 0 0 1-4.099-4.014c-.632-1.211-.955-2.433-1.036-3.906-.026-.475-.048-.618-.11-.726a.81.81 0 0 0-.844-.357m15.809 2.761a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCommunity);
export default ForwardRef;
