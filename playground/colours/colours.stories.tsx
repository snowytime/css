import React from "react";
import "./colours.scss";

const Box = ({ color, level }: { color: string; level: string }) => {
    const [ref, _setRef] = React.useState<HTMLDivElement | null>(null);
    const setRef = React.useMemo(() => _setRef, []);

    const luminCalculate = React.useCallback(() => {
        if (!ref) return;
        const luminance = window
            .getComputedStyle(ref)
            .getPropertyValue("background-color")
            .match(/\d+/g)
            ?.map((n) => parseInt(n, 10))
            .reduce((a, b) => a + b, 0);
        if (luminance && luminance > 382) {
            ref.style.color = "black";
        } else {
            ref.style.color = "white";
        }
    }, [ref]);
    // create a mutation observer that watches the data-theme attribute on the html tag
    const observe = React.useCallback(() => {
        if (!ref) return;
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes") {
                    luminCalculate();
                }
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
    }, [ref, luminCalculate]);

    React.useEffect(() => {
        luminCalculate();
        observe();
    }, [ref, observe, luminCalculate]);
    const [label, setLabel] = React.useState(level);
    const addToClipboard = () => {
        setLabel("copied!");
        setTimeout(() => {
            setLabel(level);
        }, 1000);
        navigator.clipboard.writeText(`hsl(var(${color}))`);
    };
    return (
        <div
            onClick={addToClipboard}
            ref={setRef}
            className='colour'
            style={{ backgroundColor: `hsl(var(${color}))` }}
        >
            {label}
        </div>
    );
};

const Category = ({ category, children }: { category: string; children: React.ReactNode }) => {
    return (
        <div className='category'>
            <div className='category-title'>{category}</div>
            <div className='line'>{children}</div>
        </div>
    );
};

export const Base = () => {
    // function that chooses color based on the luminance of the background color as css variable
    return (
        <>
            <Category category='base'>
                <Box color='--background' level='back' />
                <Box color='--foreground' level='fore' />
            </Category>

            <Category category='grey'>
                <Box color='--grey-50' level='50' />
                <Box color='--grey-100' level='100' />
                <Box color='--grey-200' level='200' />
                <Box color='--grey-300' level='300' />
                <Box color='--grey-400' level='400' />
                <Box color='--grey-500' level='500' />
                <Box color='--grey-600' level='600' />
                <Box color='--grey-700' level='700' />
                <Box color='--grey-800' level='800' />
                <Box color='--grey-900' level='900' />
            </Category>

            <Category category='accent'>
                <Box color='--accent-50' level='50' />
                <Box color='--accent-100' level='100' />
                <Box color='--accent-200' level='200' />
                <Box color='--accent-300' level='300' />
                <Box color='--accent-400' level='400' />
                <Box color='--accent-500' level='500' />
                <Box color='--accent-600' level='600' />
                <Box color='--accent-700' level='700' />
                <Box color='--accent-800' level='800' />
                <Box color='--accent-900' level='900' />
            </Category>

            <Category category='slate'>
                <Box color='--slate-50' level='50' />
                <Box color='--slate-100' level='100' />
                <Box color='--slate-200' level='200' />
                <Box color='--slate-300' level='300' />
                <Box color='--slate-400' level='400' />
                <Box color='--slate-500' level='500' />
                <Box color='--slate-600' level='600' />
                <Box color='--slate-700' level='700' />
                <Box color='--slate-800' level='800' />
                <Box color='--slate-900' level='900' />
            </Category>

            <Category category='zinc'>
                <Box color='--zinc-50' level='50' />
                <Box color='--zinc-100' level='100' />
                <Box color='--zinc-200' level='200' />
                <Box color='--zinc-300' level='300' />
                <Box color='--zinc-400' level='400' />
                <Box color='--zinc-500' level='500' />
                <Box color='--zinc-600' level='600' />
                <Box color='--zinc-700' level='700' />
                <Box color='--zinc-800' level='800' />
                <Box color='--zinc-900' level='900' />
            </Category>

            <Category category='stone'>
                <Box color='--stone-50' level='50' />
                <Box color='--stone-100' level='100' />
                <Box color='--stone-200' level='200' />
                <Box color='--stone-300' level='300' />
                <Box color='--stone-400' level='400' />
                <Box color='--stone-500' level='500' />
                <Box color='--stone-600' level='600' />
                <Box color='--stone-700' level='700' />
                <Box color='--stone-800' level='800' />
                <Box color='--stone-900' level='900' />
            </Category>

            <Category category='neutral'>
                <Box color='--neutral-50' level='50' />
                <Box color='--neutral-100' level='100' />
                <Box color='--neutral-200' level='200' />
                <Box color='--neutral-300' level='300' />
                <Box color='--neutral-400' level='400' />
                <Box color='--neutral-500' level='500' />
                <Box color='--neutral-600' level='600' />
                <Box color='--neutral-700' level='700' />
                <Box color='--neutral-800' level='800' />
                <Box color='--neutral-900' level='900' />
            </Category>

            <Category category='red'>
                <Box color='--red-50' level='50' />
                <Box color='--red-100' level='100' />
                <Box color='--red-200' level='200' />
                <Box color='--red-300' level='300' />
                <Box color='--red-400' level='400' />
                <Box color='--red-500' level='500' />
                <Box color='--red-600' level='600' />
                <Box color='--red-700' level='700' />
                <Box color='--red-800' level='800' />
                <Box color='--red-900' level='900' />
            </Category>

            <Category category='orange'>
                <Box color='--orange-50' level='50' />
                <Box color='--orange-100' level='100' />
                <Box color='--orange-200' level='200' />
                <Box color='--orange-300' level='300' />
                <Box color='--orange-400' level='400' />
                <Box color='--orange-500' level='500' />
                <Box color='--orange-600' level='600' />
                <Box color='--orange-700' level='700' />
                <Box color='--orange-800' level='800' />
                <Box color='--orange-900' level='900' />
            </Category>

            <Category category='amber'>
                <Box color='--amber-50' level='50' />
                <Box color='--amber-100' level='100' />
                <Box color='--amber-200' level='200' />
                <Box color='--amber-300' level='300' />
                <Box color='--amber-400' level='400' />
                <Box color='--amber-500' level='500' />
                <Box color='--amber-600' level='600' />
                <Box color='--amber-700' level='700' />
                <Box color='--amber-800' level='800' />
                <Box color='--amber-900' level='900' />
            </Category>

            <Category category='yellow'>
                <Box color='--yellow-50' level='50' />
                <Box color='--yellow-100' level='100' />
                <Box color='--yellow-200' level='200' />
                <Box color='--yellow-300' level='300' />
                <Box color='--yellow-400' level='400' />
                <Box color='--yellow-500' level='500' />
                <Box color='--yellow-600' level='600' />
                <Box color='--yellow-700' level='700' />
                <Box color='--yellow-800' level='800' />
                <Box color='--yellow-900' level='900' />
            </Category>

            <Category category='lime'>
                <Box color='--lime-50' level='50' />
                <Box color='--lime-100' level='100' />
                <Box color='--lime-200' level='200' />
                <Box color='--lime-300' level='300' />
                <Box color='--lime-400' level='400' />
                <Box color='--lime-500' level='500' />
                <Box color='--lime-600' level='600' />
                <Box color='--lime-700' level='700' />
                <Box color='--lime-800' level='800' />
                <Box color='--lime-900' level='900' />
            </Category>

            <Category category='green'>
                <Box color='--green-50' level='50' />
                <Box color='--green-100' level='100' />
                <Box color='--green-200' level='200' />
                <Box color='--green-300' level='300' />
                <Box color='--green-400' level='400' />
                <Box color='--green-500' level='500' />
                <Box color='--green-600' level='600' />
                <Box color='--green-700' level='700' />
                <Box color='--green-800' level='800' />
                <Box color='--green-900' level='900' />
            </Category>

            <Category category='emerald'>
                <Box color='--emerald-50' level='50' />
                <Box color='--emerald-100' level='100' />
                <Box color='--emerald-200' level='200' />
                <Box color='--emerald-300' level='300' />
                <Box color='--emerald-400' level='400' />
                <Box color='--emerald-500' level='500' />
                <Box color='--emerald-600' level='600' />
                <Box color='--emerald-700' level='700' />
                <Box color='--emerald-800' level='800' />
                <Box color='--emerald-900' level='900' />
            </Category>

            <Category category='teal'>
                <Box color='--teal-50' level='50' />
                <Box color='--teal-100' level='100' />
                <Box color='--teal-200' level='200' />
                <Box color='--teal-300' level='300' />
                <Box color='--teal-400' level='400' />
                <Box color='--teal-500' level='500' />
                <Box color='--teal-600' level='600' />
                <Box color='--teal-700' level='700' />
                <Box color='--teal-800' level='800' />
                <Box color='--teal-900' level='900' />
            </Category>

            <Category category='cyan'>
                <Box color='--cyan-50' level='50' />
                <Box color='--cyan-100' level='100' />
                <Box color='--cyan-200' level='200' />
                <Box color='--cyan-300' level='300' />
                <Box color='--cyan-400' level='400' />
                <Box color='--cyan-500' level='500' />
                <Box color='--cyan-600' level='600' />
                <Box color='--cyan-700' level='700' />
                <Box color='--cyan-800' level='800' />
                <Box color='--cyan-900' level='900' />
            </Category>

            <Category category='sky'>
                <Box color='--sky-50' level='50' />
                <Box color='--sky-100' level='100' />
                <Box color='--sky-200' level='200' />
                <Box color='--sky-300' level='300' />
                <Box color='--sky-400' level='400' />
                <Box color='--sky-500' level='500' />
                <Box color='--sky-600' level='600' />
                <Box color='--sky-700' level='700' />
                <Box color='--sky-800' level='800' />
                <Box color='--sky-900' level='900' />
            </Category>

            <Category category='blue'>
                <Box color='--blue-50' level='50' />
                <Box color='--blue-100' level='100' />
                <Box color='--blue-200' level='200' />
                <Box color='--blue-300' level='300' />
                <Box color='--blue-400' level='400' />
                <Box color='--blue-500' level='500' />
                <Box color='--blue-600' level='600' />
                <Box color='--blue-700' level='700' />
                <Box color='--blue-800' level='800' />
                <Box color='--blue-900' level='900' />
            </Category>

            <Category category='indigo'>
                <Box color='--indigo-50' level='50' />
                <Box color='--indigo-100' level='100' />
                <Box color='--indigo-200' level='200' />
                <Box color='--indigo-300' level='300' />
                <Box color='--indigo-400' level='400' />
                <Box color='--indigo-500' level='500' />
                <Box color='--indigo-600' level='600' />
                <Box color='--indigo-700' level='700' />
                <Box color='--indigo-800' level='800' />
                <Box color='--indigo-900' level='900' />
            </Category>

            <Category category='violet'>
                <Box color='--violet-50' level='50' />
                <Box color='--violet-100' level='100' />
                <Box color='--violet-200' level='200' />
                <Box color='--violet-300' level='300' />
                <Box color='--violet-400' level='400' />
                <Box color='--violet-500' level='500' />
                <Box color='--violet-600' level='600' />
                <Box color='--violet-700' level='700' />
                <Box color='--violet-800' level='800' />
                <Box color='--violet-900' level='900' />
            </Category>

            <Category category='purple'>
                <Box color='--purple-50' level='50' />
                <Box color='--purple-100' level='100' />
                <Box color='--purple-200' level='200' />
                <Box color='--purple-300' level='300' />
                <Box color='--purple-400' level='400' />
                <Box color='--purple-500' level='500' />
                <Box color='--purple-600' level='600' />
                <Box color='--purple-700' level='700' />
                <Box color='--purple-800' level='800' />
                <Box color='--purple-900' level='900' />
            </Category>

            <Category category='fuchsia'>
                <Box color='--fuchsia-50' level='50' />
                <Box color='--fuchsia-100' level='100' />
                <Box color='--fuchsia-200' level='200' />
                <Box color='--fuchsia-300' level='300' />
                <Box color='--fuchsia-400' level='400' />
                <Box color='--fuchsia-500' level='500' />
                <Box color='--fuchsia-600' level='600' />
                <Box color='--fuchsia-700' level='700' />
                <Box color='--fuchsia-800' level='800' />
                <Box color='--fuchsia-900' level='900' />
            </Category>

            <Category category='pink'>
                <Box color='--pink-50' level='50' />
                <Box color='--pink-100' level='100' />
                <Box color='--pink-200' level='200' />
                <Box color='--pink-300' level='300' />
                <Box color='--pink-400' level='400' />
                <Box color='--pink-500' level='500' />
                <Box color='--pink-600' level='600' />
                <Box color='--pink-700' level='700' />
                <Box color='--pink-800' level='800' />
                <Box color='--pink-900' level='900' />
            </Category>

            <Category category='rose'>
                <Box color='--rose-50' level='50' />
                <Box color='--rose-100' level='100' />
                <Box color='--rose-200' level='200' />
                <Box color='--rose-300' level='300' />
                <Box color='--rose-400' level='400' />
                <Box color='--rose-500' level='500' />
                <Box color='--rose-600' level='600' />
                <Box color='--rose-700' level='700' />
                <Box color='--rose-800' level='800' />
                <Box color='--rose-900' level='900' />
            </Category>
        </>
    );
};
