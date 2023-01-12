import {Button, FileInput, Label, Textarea, TextInput} from "flowbite-react";

export default function EditUser() {
    return (
        <>
            <div className="mx-4 mt-5 md:w-96 md:mx-auto my-auto">
                <h3 className="text-2xl text-center font-semibold text-slate-600 mt-6">Edit User</h3>
                <form className="flex flex-col gap-4 mt-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Title"
                                value="Product Title"
                            />
                        </div>
                        <TextInput
                            id="title"
                            type="text"
                            placeholder="Lenovo Ideapad 5"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Title"
                                value="Product Title"
                            />
                        </div>
                        <TextInput
                            id="title"
                            type="text"
                            placeholder="Lenovo Ideapad 5"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="occupation"
                                value="Occupation"
                            />
                        </div>
                        <TextInput
                            id="occupation"
                            type="text"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Enter your biography"
                            />
                        </div>
                        <Textarea
                            id="biography"
                            placeholder="Enter your biography"
                            required={true}
                            rows={7}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}