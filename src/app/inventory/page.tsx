"use client"

import Sidebar from "@/components/Sidebar"

import Image from "next/image"
import { MutableRefObject, useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"
import Search from "@public/inventory/search-icon.svg"
import LeftArrow from "@public/inventory/arrow-left.svg"
import RightArrow from "@public/inventory/arrow-right.svg"
import WhitePlus from "@public/inventory/white-plus.svg"
import WhiteCross from "@public/inventory/white-cross.svg"
import QuestionMark from "@public/inventory/question-mark-icon.svg"
import ReactPopup from "@/components/ReactPopup"
import { PopupActions } from "reactjs-popup/dist/types"

export default function Inventory() {
  const searchInputRef =
    useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>
  const categoryBarRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>
  const addCategoryButtonRef =
    useRef<PopupActions>() as MutableRefObject<PopupActions>
  const addProductButtonRef =
    useRef<PopupActions>() as MutableRefObject<PopupActions>
  const { events } = useDraggable(categoryBarRef)

  const arrowStyles =
    "flex justify-center items-center hover:bg-neutral-100 transitions-colors duration-300"
  const categoryButtonStyles =
    "bg-white p-3 hover:bg-neutral-100 transition-colors duration-300 grow"
  const categoryTextStyles = "inline-block min-w-[10rem]"
  const addButtonStyles =
    "bg-gradient-to-br text-white text-2xl shadow-md rounded-lg p-3 transition-transform duration-300 hover:scale-105"
  const addInputStyles =
    "border-solid border-[3px] border-neutral-300 placeholder:text-neutral-300 text-xl outline-none rounded-xl p-3 w-96 bg-transparent"

  return (
    <div className="flex">
      <Sidebar />
      <main className={`main justify-between`}>
        <div className="flex flex-col gap-10">
          <header className="flex justify-between">
            <h1 className="text-5xl">Inventory</h1>
            <div className="flex bg-white shadow-lg rounded-lg p-2 gap-2">
              <Image
                className="w-8"
                src={Search}
                alt="Search Icon"
                onClick={() => searchInputRef.current.focus()}
              />
              <input
                className="placeholder:text-neutral-300 outline-none"
                placeholder="Search product... "
                ref={searchInputRef}
              />
            </div>
          </header>
          <section
            className="grid bg-white rounded-xl shadow-md"
            style={{ gridTemplateColumns: "4rem auto 4rem" }}
          >
            <button className={`${arrowStyles} rounded-tl-xl rounded-bl-xl`}>
              <Image src={LeftArrow} alt="Left Arrow" />
            </button>
            <div
              className="flex overflow-x-auto"
              {...events}
              ref={categoryBarRef}
            >
              <button className={categoryButtonStyles}>
                <span className={categoryTextStyles}>All</span>
              </button>
              <button className={categoryButtonStyles}>
                <span className={categoryTextStyles}>Appetizer</span>
              </button>
              <button className={categoryButtonStyles}>
                <span className={categoryTextStyles}>Entrees</span>
              </button>
              <button className={categoryButtonStyles}>
                <span className={categoryTextStyles}>Desserts</span>
              </button>
              <button className={categoryButtonStyles}>
                <span className={categoryTextStyles}>Drinks</span>
              </button>
            </div>
            <button className={`${arrowStyles} rounded-tr-xl rounded-br-xl`}>
              <Image src={RightArrow} alt="Right Arrow" />
            </button>
          </section>
        </div>
        <div className="flex justify-between">
          <ReactPopup
            trigger={
              <button className="bg-gradient-to-br from-red-400 to-red-500 rounded-full p-2 shadow-md hover:scale-105 transition-transform duration-300">
                <Image src={WhiteCross} alt="White Cross" width={50} />
              </button>
            }
            position={"top left"}
            offsetX={60}
            arrow={false}
            closeOnDocumentClick
            closeOnEscape
          >
            <div className="text-red-500 bg-white rounded-lg shadow-md animate-popup">
              <button className="w-64 p-3 hover:bg-neutral-100 transition-colors duration-300 rounded-t-lg block">
                Delete Product
              </button>
              <button className="w-64 p-3 hover:bg-neutral-100 transition-colors duration-300 rounded-b-lg block">
                Delete Category
              </button>
            </div>
          </ReactPopup>
          <ReactPopup
            trigger={
              <button className="bg-gradient-to-br from-main-light-blue to-main-blue rounded-full p-2 shadow-md hover:scale-105 transition-transform duration-300">
                <Image src={WhitePlus} alt="White Plus" width={50} />
              </button>
            }
            position={"top right"}
            offsetX={-60}
            arrow={false}
            closeOnDocumentClick
            closeOnEscape
            nested
          >
            <div className="text-main-blue bg-white rounded-lg shadow-md animate-popup">
              <ReactPopup
                trigger={
                  <button className="w-64 p-3 hover:bg-neutral-100 transition-colors duration-300 rounded-t-lg block">
                    Add Product
                  </button>
                }
                modal
                closeOnDocumentClick={false}
                closeOnEscape
                arrow={false}
                blur
                popupRef={addProductButtonRef}
              >
                <div className="animate-popup bg-white shadow-md rounded-xl p-7 flex gap-7">
                  <div className="flex flex-col items-center gap-7">
                    <h1 className="text-4xl">New Product</h1>
                    <div className="bg-neutral-200 rounded-xl aspect-square grid place-items-center w-1/2">
                      <Image
                        src={QuestionMark}
                        alt="Question Mark"
                        width={80}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-7">
                      <button
                        className={`${addButtonStyles} from-orange-400 to-orange-500`}
                      >
                        Choose Photo
                      </button>
                      <button
                        className={`${addButtonStyles} from-orange-400 to-orange-500`}
                      >
                        Generate Photo
                      </button>
                    </div>
                    <button
                      className={`${addButtonStyles} from-red-400 to-red-500 w-full`}
                      onClick={() => addProductButtonRef.current.close()}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      className={addInputStyles}
                      placeholder="New Product Name..."
                    />
                    <textarea
                      className={`${addInputStyles} resize-none grow`}
                      placeholder="Product Description..."
                    />
                    <input
                      className={addInputStyles}
                      placeholder="Product Category..."
                    />
                    <input
                      className={addInputStyles}
                      placeholder="Product Price..."
                    />
                    <button
                      className={`${addButtonStyles} from-main-light-blue to-main-blue`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </ReactPopup>
              <ReactPopup
                trigger={
                  <button className="w-64 p-3 hover:bg-neutral-100 transition-colors duration-300 rounded-b-lg block">
                    Add Category
                  </button>
                }
                modal
                closeOnDocumentClick={false}
                closeOnEscape
                arrow={false}
                blur
                popupRef={addCategoryButtonRef}
              >
                <div className="animate-popup bg-white shadow-md rounded-xl p-7 flex flex-col items-center gap-7 w-max">
                  <h1 className="text-4xl">New Category</h1>
                  <input
                    className={addInputStyles}
                    placeholder="New category name..."
                  />
                  <div className="grid grid-cols-2 gap-7 w-full">
                    <button
                      className={`${addButtonStyles} from-red-400 to-red-500`}
                      onClick={() => addCategoryButtonRef.current.close()}
                    >
                      Cancel
                    </button>
                    <button
                      className={`${addButtonStyles} from-main-light-blue to-main-blue`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </ReactPopup>
            </div>
          </ReactPopup>
        </div>
      </main>
    </div>
  )
}
